import React from "react";

function Template1() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col"
              style={{
                textAlign: "center"
              }}>
              <h1 style={{ marginTop: "3rem", fontSize: "4rem",fontSize:"bold" }}>
                ABOUT US
              </h1>
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <div className="col-2"></div>
                <div className="col-8">
                  <p style={{marginTop:"2rem",fontSize: "1.6rem"}}>
                  EsporTree is an all-in-one platform that is dedicated to revolutionizing the Esports
                  industry. Our goal is to unify the entire Esports ecosystem by connecting gamers,
                  tournament companies, gaming companies, and government organizations under a
                  single roof
                  </p>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ textAlign:"center"}}
          >
            <h1 style={{ fontSize: "4rem",marginBottom:"2.5rem",fontSize:"bold",marginTop:"2.5rem" }}>
              OUR STORY
            </h1>
            <div className="row" style={{marginTop:"1rem"}} >
              <div className="col-2"></div>
              <div className="col-8">
                <div class="card" style={{boxShadow:"1.5rem",fontSize:"1.6rem",borderRadius:"2rem",marginBottom:"1rem",padding:"2rem"}}>
                  <div class="card-body">
                    From the initial days of my college, I got really interested
                    in online gaming, especially mobile gaming. I spent hours
                    every day improving my gameplay in competitive games like PUBG
                    and COD-mobile. Esports is like every other traditional game;
                    one inevitably develops a zest to improve their skills because
                    it's fun and it's satisfactory.<br></br><br/>
                     Unfortunately, at that time, I
                    could not find the proper tournaments I needed, nor could the
                    system satisfy my other needs like virtual mentorship and
                    gaming connections. Yep, it was an issue, but in every issue,
                    one can find an opportunity!<br/><br/> Initially, we started off by
                    organizing our own tournaments. Thomso, which was a college
                    fest, was the first time when we held our gaming tournament.
                    The response was incredible and way above our expectations.
                    This was the first time when we saw the scale of this problem.
                    Although it was a success, the management process was a mess.
                    It did not feel like we were in the 21st century. We
                    immediately started building Tournafest after that and
                    launched our first prototype, and since then, it has been a
                    constant feedback loop.<br/><br/> We want to reinvent how the Esports
                    ecosystem works and move towards creating a seamless and
                    motivating platform where discoverability and scalability are
                    the least of issues. Every gamer's skills deserve to be
                    recognized and respected, and we are contributing our share of
                    effort!
                  </div>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          </div>
          <div className="row">
            <h1 style={{fontSize:"4rem",textAlign:"center",marginTop:"2rem",fontWeight:"bold",marginBottom:"4rem"}}>LIVE IT FOR GAMING</h1>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-4">
                <h1>OUR MISSION</h1>
                <p style={{fontSize:"1.6rem",marginBottom:"3rem",marginTop:"3rem"}}>To empower and enable esports enthusiasts to
                achieve their full potential by providing a worldclass platform that connects, engages, and entertains
                them while driving the growth and development of
                the esports industry in India and beyond.</p>
              </div>
              <div className="col-1"></div>
              <div className="col-4">
                <h1>OUR VISION</h1>
                <p style={{fontSize:"1.6rem",marginBottom:"3rem",marginTop:"3rem"}}> To be the leading platform for esports enthusiasts,
                providing a seamless experience for players,
                organizers, and fans to connect, compete, and
                elevate the industry to new heights.</p>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row" >
              <div className="col-2"></div>
              <div className="col-5" style={{marginTop:"4rem",marginBottom:"7rem",borderRadius:"3rem"}}>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5mX6mOfPm6n8LdUubblwa4fOrjEZijMTIw&usqp=CAU" class="img-fluid" style={{borderRadius:"3rem"}}/>
              </div>
              <div className="col-4" style={{marginTop:"4rem"}}>
                <h1>OUR VALUE</h1>
                <p style={{fontSize:"1.6rem",marginBottom:"3rem",marginTop:"3rem"}}>Our daily activities always incorporate values of Collaboration, Exploration, Dedication towards building a better Esports environment. Our values ensure that we work as a well-lubricated team and fulfill a gamer's daily needs.</p>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
          <div className="row">
          <h1 className="text-center" style={{fontWeight:"bold",fontSize:"4rem",marginTop:"0.5rem"}}>WE ARE TRUSTED BY</h1>
          <div className="col-3"></div>
          <div className="col-6">
          <p className="text-center mt-4" style={{fontSize:"1.6rem"}}>"For esports to become democratic, the tournaments have to move out of fancy pubs and go into every phone in every lane of the country, like street cricket of the future." - Anand Lunia, General Partner at IndiaQuotient.</p>
          <hr/>
          </div>
          </div>
          <div className="container-fluid">
          <div className="row mt-8">
          <div className="col-2"></div>
           <div className="col-md-9">
           <img src={require('./imge/img11.jpg')} className="img-fluid" alt="team" style={{height:"30rem"}}/>
           </div>
           <div className="col-1"></div>        
          </div>
          <div className="row" style={{marginTop:"3rem"}}>
          <div className="col-2"></div>
           <div className="col-md-9">
           <img src={require('./imge/img22.jpg')} className="img-fluid" alt="team" style={{height:"35rem"}}/>
           </div>
           <div className="col-1"></div>        
          </div>
          <div className="row"
          style={{marginTop:"3rem"}}>
           <div className="col text-center">
           <img src={require('./imge/img33.jpg')} className="img-fluid" alt="team" style={{height:"40rem",width:"90rem"}}/>
           </div>      
          </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                 <h1 style={{ marginTop:"2rem",fontSize: "4rem",marginBottom:"1rem",fontWeight:"bold"}} >WANNA START AN ADVENTURE?</h1>
                 <p style={{fontSize:"1.6rem",marginTop:"3rem",marginBottom:"3rem"}}>Join us to experience a new generation of work ethos where your growth is the unit of our success and your efforts matter!</p>
                 <button className="btn ml-md-8" style={{backgroundColor:"#8459ba",fontSize:"2rem",borderRadius:"2rem",color:"white",padding:"1rem",marginBottom:"4rem"}}>Join  Us</button>
                </div>
                <div className="col-4"></div>
                <div className="col-2"></div>
            </div>
      </div>        
      </>
    );
  }
  
  export default Template1;