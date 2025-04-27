document.addEventListener("DOMContentLoaded", function() {
    const downloadBtn = document.getElementById("dowloadBtn");
    if(downloadBtn){
        downloadBtn.addEventListener("click", function(){
            const element = document.body;


            const content ={
                margin: 0.5,
                filename:"cv.pdf",
                Image: { type: "jpeg", quality: 0.98},
                html2canvas:{scale: 2},
                jsPDF: { unit: "in", format:"letter", orientation: "portrait"},

            };
            html2pdf().set(content).from(element).save();        });
    }

});