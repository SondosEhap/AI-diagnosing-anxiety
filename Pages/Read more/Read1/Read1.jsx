import React from "react";
import "./Read1.css";
import Navbar from "../../../Components/Navbar/Navbar";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import DarkFooter from "../../../Components/Footer/DarkFooter";

const Read1 = () => {
  return (
    <div>
      <Navbar />
      <div className="Read1_title">
        <p>Therapist VS Psycologist: What's the difference?</p>
      </div>
      <div className="paragraphRead11">
        Choosing to seek mental health services through individual, group,
        couples or family therapy with a licensed psychologist can be a brave
        choice to prioritize your well-being. Whether you see a mental health
        counselor, therapist, psychologist or psychiatrist, these professionals
        have the expertise to assist you in various areas of mental health.
        Finding an individual with the credentials to treat your specific
        concerns and meet your unique goals can be essential when looking for a
        counseling provider.
      </div>
      <div className="paragraphRead11">
        Psychologists and therapists across the American psychological landscape
        often have similar roles but different education levels. In addition to
        an undergraduate degree, psychologists often have advanced degrees, such
        as a Ph.D. or PsyD, whereas therapists may have master's degrees. In
        addition, psychologists don't all work as therapists; many study human
        behavior as researchers, professors and authors. Knowing the difference
        between a therapist, psychologist, and other types of mental health
        professionals available to you can help you find the most effective
        patient care for any mental health disorders or concerns.
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={img1} />
      </div>
      <div
        className="paragraphRead11"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <b>What Is A Psychologist?</b>
        <br />
        According to the American Psychological Association, a psychologist has
        an advanced degree such as a Ph.D. in psychology or a PsyD in clinical
        psychology. A PsyD is generally regarded as a type of Ph.D. issued to
        clinical psychologists who work directly with clients, helping them with
        their mental health conditions through talk therapy, psychological
        testing, assessment and diagnosis of mental disorders and illnesses.
        Additionally, per the American Psychological Association, clinical
        psychologists may treat mental illnesses by providing individual
        therapy, marriage and family therapy or group therapy. Ph.D.
        psychologists can work as clinicians, researchers or in various
        settings, such as universities, corporations and industries; doing
        non-clinical work involving an in-depth understanding of human behavior.
        This understanding generally ranges from why people act the way they do
        to behavioral struggles to severe mental health conditions. However,
        they can also work as counseling psychologists to offer therapy if they
        choose to. It can be important to note that not all people with an
        advanced psychology degreee (such as psychologists) are medical doctors;
        despite having a doctorate. An individual must have an MD title to be a
        doctor who can offer formal diagnosis and prescription-related support.
        While therapists cannot prescribe medication, they can offer treatment
        suggestions within the realm of talk therapy. Doctors in psychology and
        the mental health profession generally include psychiatrists,
        neuropsychologists and general medical doctors with a specialty in
        psychiatry or psychology. If you seek prescription medications, a
        psychiatrist is the only professional able to write the prescription or
        offer medication management in most states.
      </div>
      <div
        className="paragraphRead11"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        However, psychologists can provide testing and diagnoses of mental
        illnesses such as:
        <li>Major depressive disorder </li>
        <li>Schizophrenia </li>
        <li>Panic disorder </li>
        <li>Bipolar disorder </li>
        <li>Personality disorders </li>
        <li>Anxiety disorder</li>
        <li>Substance use* disorders </li>
        <li>Post-traumatic stress disorder (PTSD) </li>
        Many clients have a complete mental healthcare team consisting of a
        psychiatrist, psychologist and sometimes case management (such as social
        work support from licensed clinical social workers on your case). To
        know what type of professional you seek, you can meet with a therapist
        for an initial consultation. Many providers offer referrals if their
        services don't fit your goals. If you are struggling with substance use,
        contact the SAMHSA National Helpline at (800) 662-4357 to receive
        support and resources.
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={img2} />
      </div>
      <div
        className="paragraphRead11"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <b>What Is A Therapist?</b>
        <br />A therapist has a master's degree in counseling, psychology or
        social work. Therapists provide master’s degree-level mental and
        emotional support to their clients through individual, couples, group
        and family therapy sessions. In addition, therapists often specialize in
        a specific area, such as substance use disorders, family dynamics,
        stress management, or grief counseling. A therapist's work frequently
        involves talking to their client, exploring areas of concern in the
        client's emotional life behaviors and mental processes, seeking
        resolution by helping the person learn new coping and communication
        skills. Psychologists, therapists, and counselors often have different
        state licenses, and different types of professional counselors types and
        experts may also work closely with each other. A licensed clinical
        social worker could also work as a counselor or therapist in some cases
        and can provide essential links to and expertise on local community
        services or groups. For example, they may connect clients to food
        resources, emergency shelters, and government benefit programs.
        "Therapist" is often used as an umbrella term for all counselors,
        clinical social workers and clinical psychologists.
      </div>
      <DarkFooter />
    </div>
  );
};

export default Read1;
