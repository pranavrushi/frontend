import React from "react";
import Image from "next/image";

const WhatWeDo = () => {
  return (
    <div className="my-4" style={{ margin: "4px 30px" }}>
      <div className="container-fluid padding we-do">
        <h1 style={{ color: "#0e918c", textAlign: "center", }} className="my-4">What we do</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-md-2">
            <Image
              width="100px"
              height="100px"
              src="/mainPage/WhatWeDo/research.png"
              alt="research.icon"
            />
          </div>
          <div className="col-md-4">
            <h3>Research</h3>
            <p>
              Research is the strong foundation upon which every successful
              academic institution is built. Here at SIME under the guidance of
              esteemed faculty members and professors with an avid group of
              students we are always working and looking to widen and deepen our
              interests and knowledge. At SIME we are always preparing ourselves
              for the future and with the research team always on a keen lookout
              we aim to continually publish papers and research proceedings of
              the highest quality that put us on the forefront of Industrial
              breakthrough.
            </p>
          </div>
          <div className="col-md-2">
            <Image
              width="150px"
              height="150px"
              src="/mainPage/WhatWeDo/indVisits.png"
              alt="industrial vistis.icon"
            />
          </div>
          <div className="col-md-4">
            <h3>Industrial Visits</h3>
            <p>
              Industry is the true fiery crucible in which the best of engineers
              are forged. Being accustomed with Industry and its work layout has
              become a staple need in engineers of the present day. At SIME we
              aim to provide industrial visits that offer an insight into how a
              leading industry or factory works. Industrial visits provide a
              hands on practical knowledge on various industrial concepts,
              knowledge and management topics. With the IAR team working under
              SIME we are continually looking and working to be updated and be
              on the forefront of Industry 4.0.
            </p>
          </div>
        </div>
        <div className="row padding justify-content-center align-items-stretch">
          <div className="col-md-2">
            <Image
              width="150px"
              height="150px"
              className="research-image"
              src="/mainPage/WhatWeDo/event.png"
              alt="research.icon"
            />
          </div>
          <div className="col-md-4">
            <h3>Events</h3>
            <p>
              SIME events are a platform to sharpen our skills and progress
              further via the means of an effective and healthy competition. The
              events aim to motivate and provide a platform for eager students
              from various fields to compete and come out on top from amongst
              their fellow counterparts. Events are a fun and innovative way to
              inculcate the spirit of competition among the participants while
              putting them up against formidable challenges and bringing the
              best out of them.
            </p>
          </div>
          <div className="col-md-2">
            <Image
              width="150px"
              height="150px"
              src="/mainPage/WhatWeDo/workshop.png"
              alt="research.icon"
            />
          </div>
          <div className="col-md-4">
            <h3>Workshops</h3>
            <p>
              Every learning is best learned when it is understood and not just
              remembered. The workshops we have are curated to reinforce the
              process of learning and are ideally structured to improve the
              process of understanding. Workshops are an incredible way of
              interacting with interested and eager public and also an efficient
              means of testing the conceptual depth and technical knowledge of
              the participants. At the workshops we focus on a wide variety of
              topics ranging from hands on experimenting, theoretical
              understanding and even industry grade software usage to widen our
              array of skillset.
            </p>
          </div>
        </div>
        <div className="row padding justify-content-center align-items-stretch">
          <div className="col-md-2">
            <Image
              width="150px"
              height="150px"
              src="/mainPage/WhatWeDo/college.png"
              alt="research.icon"
            />
          </div>
          <div className="col-md-4">
            <h3>Inter-institute meets</h3>
            <p>
              As a part of a very reputed and respectable institution SIME
              collaborates with various institutes and colleges throughout the
              country. Inter-Institute meets are an essential part of our regime
              where we compete with and against the bright minds of other
              reputable institutions and collaborate on projects and
              innovations. The meets also provide an excellent chance to meet
              and work under new professors, laboratories and environments for
              students from both the institutes.
            </p>
          </div>
          <div className="col-md-2">
            <Image
              width="150px"
              height="150px"
              src="/mainPage/WhatWeDo/tent.png"
              alt="research.icon"
            />
          </div>
          <div className="col-md-4">
            <h3>fests</h3>
            <p>
              Our annual fest is being planned to be most enjoyable and
              prestigious event that is aimed at bringing forth participation
              from all over our country and engaging in a wide variety of
              Technical/management events and exercises that brings out the true
              potential for excellence in all of them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
