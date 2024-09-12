
function About() {
  return (
    <div className="absolute top-0 left-0 flex z-10 bg-transparent w-full h-screen items-center justify-center pt-10">
      <iframe
        src="https://www.youtube.com/embed/U_zefWkEyL0?si=PitsDhm_wLT7MTqF"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="h-[700px] z-50 w-[1000px]"
      ></iframe>
    </div>
  );
}

export default About;
