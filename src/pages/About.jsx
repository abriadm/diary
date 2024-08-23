
function About() {
  return (
    <div className="absolute top-0 left-0 -z-10 flex bg-[#DCE0FF] w-full h-screen items-center justify-center pt-10">
      <iframe
        src="https://www.youtube.com/embed/jRV8F8z_bKY?si=dLbHy8wh35DqcG9F&amp;controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="h-[700px] z-50 w-[1000px]"
      ></iframe>
    </div>
  );
}

export default About;
