import React from "react";
import "./about.css";
import Rakshitimg from "../0-removebg-preview.png";
export default function About() {
  return (
    <div>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About</h2>
            <p>
              2023 Computer Science Engineering undergraduate from Indian
              Institute of Information Technology , Pune having a keen
              proficieny in mern stack development with adequate Data Structures
              and Algorithms, and interest to learn and make impactful projects
              that Elon musk didn’t do.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <img src={Rakshitimg} class="img-fluid" alt="Rakshit Jain" />
            </div>

            <div class="col-lg-8 pt-4 pt-lg-0 content mt-5">
              <h3>Full Web Developer &amp; Competitve Programmer</h3>
              <p class="font-italic"></p>
              <div>
                <div class="row">
                  <div class="col-lg-6 ">
                    <ul>
                      <li>
                        <i class="fa fa-angle-right"></i>{" "}
                        <strong>Current Company :</strong> Yugabyte
                      </li>
                      <li>
                        <i class="fa fa-angle-right"></i>{" "}
                        <strong>Birthday:</strong> 3 March 2001
                      </li>

                      <li>
                        <i class="fa fa-angle-right"></i> <strong>City:</strong>{" "}
                        Mumbai,Maharashtra,India
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="fa fa-angle-right"></i>{" "}
                        <strong>Current Role:</strong> Software development
                        intern
                      </li>
                      <li>
                        <i class="fa fa-angle-right"></i>{" "}
                        <strong>Degree:</strong> B.Tech in CSE
                      </li>
                      <li>
                        <i class="fa fa-angle-right"></i>{" "}
                        <strong>Email:</strong> rakshitdhoka13@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex ">
                  <a
                    href="https://drive.google.com/file/d/1hRLJrWB9U9hoz0IjqjtMmYlvOrtzeqPm/view?usp=sharing"
                    target="_blank"
                    className=" btn btn-lg rounded"
                    style={{
                      backgroundColor: "#c060a1",
                      borderColor: "#c060a1",
                      fontWeight: "600",
                    }}
                    rel="noreferrer"
                  >
                    Resume
                    <i class="fa fa-download ml-2" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
