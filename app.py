from flask import Flask, jsonify, request , session
from flask_bcrypt import Bcrypt #pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/ 
from flask_cors import CORS, cross_origin #ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
from flask_marshmallow import Marshmallow
from models import db,User,Books,Doctors
from flask_migrate import Migrate
import redis
import joblib
import os
import pandas as pd
import logging

app = Flask(__name__)

migrate = Migrate(app, db)


app.config['SECRET_KEY'] = 'cairocoders-ednalan'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///flaskdb.db'

#enable session config
#app.config['SESSION_TYPE'] = 'redis'
#so that session won't be permenant
#app.config['SESSION_PERMANENT'] = False

#set the path
#app.config['SESSION_REDIS'] = redis.from_url("redis://127.0.0.1:6379")

app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)
#session(app)

SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_ECHO = True

  
bcrypt = Bcrypt(app) 
CORS(app, supports_credentials=True)

db.init_app(app)
ma=Marshmallow(app)  

with app.app_context():
    db.create_all()


@app.route('/')
def hello():
   return "<p> Hallo </p>"

########################### SIGN UP PART ###############################

@app.route("/signup", methods=["POST"])
def register_user():
    #gets email and password input
    username=request.json["username"]
    email = request.json["email"]
    password = request.json["password"]
   

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409
    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password,username=username)
    
    db.session.add(new_user)
    db.session.commit()
    
    session['user_id']= new_user.id

    return jsonify({
        "id": new_user.id,
        "username":new_user.username,
        "email": new_user.email, 
        
    })
########################### LOGIN PART ###############################
@app.route("/login", methods=["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    session['user_id'] = user.id
    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email
    })


########################### ADMIN LOGIN PART ###############################

@app.route("/admin/login", methods=["POST"])
def login_admin():
    email = request.json["email"]
    password = request.json["password"]

    if email == "admin@gmail.com" and password == "123456":
        admin_user = User.query.filter_by(email=email).first()
        if not admin_user:
            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
            new_user = User(email=email, password=hashed_password, username="Admin")
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id

            return jsonify({
                "id": new_user.id,
                "username": new_user.username,
                "email": new_user.email
            })
        else:
            session['user_id'] = admin_user.id
            return jsonify({
                "id": admin_user.id,
                "username": admin_user.username,
                "email": admin_user.email
            })
    else:
        return jsonify({"error": "Unauthorized"}), 401

########################### PROFILE PART ###############################

@app.route("/@me", methods=['GET'])
def get_current_user():
    uid = session.get('user_id')
    if not uid:
      return jsonify({"error": "Unauthorized"}), 401
    user = User.query.filter_by(id=uid).first()

    return jsonify({
        "username": user.username,
        "email": user.email,
        "testanxietylevel": user.testanxietylevel,
        "anxietydisorderlevel": user.anxietydisorderlevel,
        
    })
########################### LOGOUT PART ###############################
@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop('user_id',None)
    return "200"
########################### BOOKS PART ###############################

class BookSchema(ma.Schema):
    class Meta:
        fields = ('id','title','link','desc','type')
 
book_schema = BookSchema()
books_schema = BookSchema(many=True)

# Return all books for moderate anxiety level
@app.route('/listmoderatebooks',methods =['GET'])
def listmoderatebooks():
    all_books = Books.query.filter_by(type="moderate")
    results = books_schema.dump(all_books)
    return jsonify(results)

# Return all books for medium test anxiety level
@app.route('/listmediumbooks',methods =['GET'])
def listmediumbooks():
    all_books = Books.query.filter_by(type="medium")
    results = books_schema.dump(all_books)
    return jsonify(results)

########################### ADD BOOK    ######################################  
@app.route('/addbook', methods=['POST'])
def add_book():
    
    title = request.json["title"]
    link = request.json["link"]
    desc = request.json["desc"]
    type = request.json["type"]

    new_book = Books(title=title, link=link, desc=desc, type=type)
    
    try:
        db.session.add(new_book)
        db.session.commit()
        #return book_schema.jsonify(new_book)
        # session['book_id']= new_book.id

        return jsonify({
            "id": new_book.id,
            "title":new_book.title,
            "link": new_book.link,
            "desc": new_book.desc,
            "type": new_book.type
        })
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
########################### DElete Book #######################################
@app.route('/deletebook', methods=['POST'])
def delete_book():
    title = request.json.get("title")

    # Find the book by title
    book_to_delete = Books.query.filter_by(title=title).first()

    if not book_to_delete:
        return jsonify({'error': 'Book not found'}), 404

    try:
        db.session.delete(book_to_delete)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

########################### THERAPISTS PART ###############################
class DoctorSchema(ma.Schema):
    class Meta:
        fields = ('id','imagelink','name','link','specialization','rating','visitors','desc','location','fees','waitingtime')
 
doctor_schema = DoctorSchema()
doctor_schema = DoctorSchema(many=True)

#Return all THERAPISTS
@app.route('/listdoctors',methods =['GET'])
def listdoctors():
    all_doctors = Doctors.query.all()
    results = doctor_schema.dump(all_doctors)
    return jsonify(results)
######################### ADD THERAPISTS #####################################
@app.route('/addtherapist', methods=['POST'])
def add_therapist():
    
    name= request.json["name"]
    link = request.json["link"]
    specialization = request.json["specialization"]
    rating = request.json["rating"]
    visitors= request.json["visitors"]
    desc = request.json["desc"]
    location = request.json["location"]
    fees = request.json["fees"]
    waitingtime = request.json["waitingtime"]
    imagelink = request.json["imagelink"]


    new_doctor = Doctors(
        name=name,
        link=link,
        specialization=specialization,
        rating=rating,
        visitors=visitors,
        desc=desc,
        location=location,
        fees=fees,
        waitingtime=waitingtime,
        imagelink=imagelink
    )
    
    try:
        db.session.add(new_doctor)
        db.session.commit()
        

        return jsonify({
            "id": new_doctor.id,
            "name": new_doctor.name,
            "link": new_doctor.link,
            "specialization": new_doctor.specialization,
            "rating": new_doctor.rating,
            "visitors": new_doctor.visitors,
            "desc": new_doctor.desc,
            "location": new_doctor.location,
            "fees": new_doctor.fees,
            "waitingtime": new_doctor.waitingtime,
            "imagelink": new_doctor.imagelink
        })
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
  
####################### Delete Thirapist ####################################
@app.route('/deletetherapist', methods=['POST'])
def delete_therapist():
    name = request.json.get("name")

    # Find the book by title
    therapist_to_delete = Doctors.query.filter_by(name=name).first()

    if not therapist_to_delete:
        return jsonify({'error': 'Therapist not found'}), 404

    try:
        db.session.delete(therapist_to_delete)
        db.session.commit()
        return jsonify({'message': 'Therapist deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
  
#######################DISORDDER QUESTIONNAIRE #################################
@app.route("/disorder_questionnaire", methods=["POST"])
def predictdisorder():
    try:
        data = request.json
        logging.info("Request data: %s", data)

        # Ensure the email key is present
        if 'email' not in data:
            return jsonify({"error": "Email not provided"}), 400

        # Ensure all questions are present in the request
        required_questions = ['Age', 'year', 'Gender', 'Specialization'] + [f"Q{i}" for i in range(1, 8)]
        for question in required_questions:
            if question not in data:
                logging.error(f"{question} not provided")
                return jsonify({"error": f"{question} not provided"}), 400

        # Extract questionnaire responses
        userInput = [[data[question] for question in required_questions]]

        # Create a DataFrame with named columns
        userInput_df = pd.DataFrame(userInput, columns=required_questions)

        # Load the pre-trained model
        model_path = os.path.join(os.path.dirname(__file__), 'dataModels', 'SVM.h5')
        model = joblib.load(model_path)

        # Make predictions
        prediction = model.predict(userInput_df)
        prediction = prediction[0]  # Assuming prediction returns "Low", "Moderate", or "High"

        if prediction == "Normal":
            anxietydisorderlevel = "normal"
        elif prediction == "Severe":
            anxietydisorderlevel = "severe"
        elif prediction == "Moderate":
            anxietydisorderlevel = "moderate"
        elif prediction == "Mild":
            anxietydisorderlevel = "mild"
        else:
            anxietydisorderlevel = "Extremely Severe"

        # Fetch the user by email from the database
        email = data['email']
        user = User.query.filter_by(email=email).first()

        if user is None:
            return jsonify({"error": "User not found"}), 404

        # Update the user's anxiety level
        user.anxietydisorderlevel = anxietydisorderlevel

        # Commit the changes to the database
        db.session.commit()

        return jsonify({
            "message": "Anxiety level updated successfully",
            "anxietydisorderlevel": user.anxietydisorderlevel
        })
    except Exception as e:
        logging.error("Error in predictdisorder: %s", e)
        return jsonify({"error": "An internal error occurred"}), 500


    
############################TEST QUESTIONNAIRE#########################

@app.route("/test_questionnaire", methods=["POST"])
def predictTest():
    print("Endpoint '/test_questionnaire' hit")

    try:
       
        data = request.json
        logging.info("Request data: %s", data)

        # Ensure the email key is present
        if 'email' not in data:
            return jsonify({"error": "Email not provided"}), 400

        # Ensure all questions are present in the request
        required_questions = ['Age', 'year', 'Gender', 'Specialization'] +[f"Q{i}" for i in range(8, 23)]
        for question in required_questions:
            if question not in data:
                return jsonify({"error": f"{question} not provided"}), 400

        # Extract questionnaire responses
        userInput = [[data[question] for question in required_questions]]

        # Create a DataFrame with named columns
        userInput_df = pd.DataFrame(userInput, columns=required_questions)

        # Load the pre-trained model
        model_path = os.path.join(os.path.dirname(__file__), 'dataModels', 'naive_bayes.h5')
        model = joblib.load(model_path)

        # Make predictions
        prediction = model.predict(userInput_df)
        prediction = prediction[0]  # Assuming prediction returns "Low", "Moderate", or "High"

        # Normalize prediction output
        # prediction = ""
        if prediction == "Low": testanxietylevel = "low"
        elif prediction == "Moderate": testanxietylevel = "medium"
        elif prediction == "High": testanxietylevel = "high"
        else:
            return jsonify({"error": "Invalid prediction result"}), 500

            
        # Fetch the user by email from the database
        email = data['email']
        user = User.query.filter_by(email=email).first()

        if user is None:
            return jsonify({"error": "User not found"}), 404

        # Update the user's anxiety level
        user.testanxietylevel = testanxietylevel
   
           # Commit the changes to the database
        db.session.commit()

        return jsonify({
            "message": "Anxiety level updated successfully",
            "testanxietylevel": user.testanxietylevel
        })
    except Exception as e:
        logging.error("Error in predictTest: %s", e)
        return jsonify({"error": "An internal error occurred"}), 500


###############################CHATBOT PART###############################
from transformers import BartTokenizer, BartForConditionalGeneration

# Load the fine-tuned model and tokenizer
model_path = 'fine_tuned_bart_chatbot.h5'  # Update with your model path
tokenizer = BartTokenizer.from_pretrained('facebook/bart-base')
model = BartForConditionalGeneration.from_pretrained(model_path)

# Define the maximum sequence length for tokenization
max_sequence_length = 100

def chat(input_text, max_length=100):
    # Tokenize the input text
    input_ids = tokenizer(input_text, return_tensors='pt')['input_ids']

    # Generate a response
    output = model.generate(input_ids, max_length=max_length, num_beams=5, early_stopping=True)
    
    # Decode and return the generated response
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    return response

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    user_input = data['input_text']
    
    response = chat(user_input)
    
    return jsonify({'response': response})

if __name__ == '_main_':
    app.run(debug=True)