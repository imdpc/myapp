import "./dotpe.css";

function Dotpe() {
  return (
    <div className="App">
      <div className="content">
        
        {/* Two headings for our section */} <h1> Trusted by 75 lac + </h1>
        <h2> merchants across India </h2>
        {/* created one row */}
        <div className="row">
          
          {/* three columns for youtube videos */}
          <div className="column-youtube">
            <iframe
              width="320"
              height="260"
              src="https://www.youtube.com/embed/79aMxZzetA4"
            ></iframe>
          </div>&nbsp;&nbsp;&nbsp;
          <div className="column-youtube">
            
            <iframe
              width="320"
              height="260"
              src="https://www.youtube.com/embed/b6J2lsCo5qQ">
              
            </iframe>
          </div>&nbsp;&nbsp;&nbsp;
          <div className="column-youtube">
            
            <iframe
              width="320"
              height="260"
              src="https://www.youtube.com/embed/fUjb6me2kn0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dotpe;

// Create a html template for showing three Youtube links for dotpe

// 1.Firstly create to headings h1 for Trusted by 75 lac + and h2 for merchants across India

// 2.cretaed three columns and used iframe for embeding youtube links also given height and width
