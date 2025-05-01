import React, { useState, useEffect } from 'react';
import arrowUp from "../icons/arrow-up.png"
// import arrowUp from "../images/arrow-up32x32.png"


const Footer = () => {
    return <> 
      <div className="copy-bottom">
        <a href="#" id="fab"><img src={arrowUp} alt="Scroll to top " />
        {/* <p>Up</p> */}
        </a>
        <p>Copyright &copy; Kinga Szayer, {(new Date().getFullYear())}</p>
   
        {/* <a href="#" id="fab">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAiNJREFUWEftll1P2zAUho/j7IK2ZnxsEy0tbYD/hppu+zHb2qr/DXAZDCqgwJa2XBDHU6wkshw7X1wgpPYmqpP4efz6HCsI3viH3pgPa4H3nYAz8m7CGqIuaVatpcoJRPC9CDyrKlFJQIHHi68kUVrAAK8sUUpAhQeMHYZkC+NzqQZKJVFYQIVz5DvT/vY0BPfGjz3EbVpFopBAKvbA7tGvGxdy5Tu/nrtg+UKoTGHmCqhwhO3u+cnGb13bHU6eDzjzZbHc7cgUUOEWxwdng9plDO8NF6INp4PGLB47Gq46AWKyYKaEUUCFYx93Tr/XrmQ4QlwcRJyjpixx/GPVZjZLRAHAKKEVUOEvCLev+rU/Ong8pkq0x6v9D5wlwiaJlIAK95m1f/mtfp0FN0l0fi5bNg4ScZ1ESiDc1zjaAFuti5O6iFm0m3QvGlpF15pJojtZNi0WiAWoKYVj2i3QFVcajpa0XyfhJM546QHwuklCN1/8bG4bGla+oP3GJiDExUScI2e8+AcADZOErm2NCcgPa2L3qEs2dRM6Iy+UEKmYIlffy0xAA/9LXbJlWo3YjpH3BAAfi0oYBTTwJ+qS7Sx4fM8ZeY8AkIjqii+zBjTwB+qS3SJwSWIOADt5SWS2YfTynLrkUxm4JHEPAIl4oTZUDqI76pIvVeCSxC0AfI7+p45k81HMAdEBib/5XuMAztCbAQKu+24sdA68ip7z8lpgncB/Td4mMJNysMwAAAAASUVORK5CYII=" alt="Scroll to top "></img>
        <p>Upp</p>
        </a> */}
     </div>

{/* const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button 
    className={`scroll-button ${isVisible ? "show" : "hide"}`}
    onClick={scrollToTop}
    >

    </button>
  );

}

export default ScrollButton */}



{/*     
     <style>{
    `#fab {
      display: none;
    }`
    }</style> */}
    </>
  }
  
  export default Footer