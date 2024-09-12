import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import img from "./img.svg";
import DarkFooter from "../../../Components/Footer/DarkFooter";
const Read2 = () => {
  return (
    <div>
      <Navbar />
      <div className="Read1_title">
        <p>What’s the difference between anxiety and being stressed?</p>
      </div>
      <div
        className="paragraphRead11"
        style={{ display: "flex", flexDirection: "row" }}
      >
        The words stress and anxiety are sometimes used interchangeably. So how
        can you tell the difference between common stress and an anxiety
        disorder? Both share many of the same physical symptoms, such as
        increased heart rate, muscle tension, or rapid breathing. In both cases,
        your body is releasing hormones to trigger these symptoms. Stress is a
        normal, proportional reaction to a stressful situation or external
        pressures. It’s normal to feel stressed about a final exam or job
        interview. When we talk about anxiety as in anxiety disorders, anxiety
        is a condition characterized by feelings of apprehension or unexplained
        thoughts of impending doom. Another way to tell the difference between
        stress and an anxiety disorder is noticing how long your feelings of
        stress last. When stress lingers for days or weeks and prevents you from
        carrying out day-to-day activities, then you may be experiencing
        anxiety. You could be avoiding certain places or situations in fear of
        what might happen. You may even feel anxious about the fact that you’re
        anxious. If you are having these concerns, you are not alone. Anxiety
        disorders are common and manageable. If you are feeling overwhelmed by
        stress or anxiety, it’s not a bad idea to reach out to a mental health
        professional to help you manage your feelings. Treatment options such as
        therapy or medication can help you work out coping techniques to manage
        stress, address concerns of an anxiety disorder, or manage the physical
        symptoms of stress and anxiety.
        <img src={img} />
      </div>
      <DarkFooter />
    </div>
  );
};

export default Read2;
