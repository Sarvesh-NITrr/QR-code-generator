const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const qrContainer = document.getElementsByClassName('qr-body')[0];
const generatebtn = document.getElementById('generatebtn');
const downloadbtn = document.getElementById('downloadbtn');

function generateQR(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
    text: qrText.value,
    width: sizes.value,
    height: sizes.value,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
}


sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    if(qrText.value == "") return;
    generateQR()
})

generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(qrText.value == ""){
        alert("Text feild is empty"); return;
    }
    generateQR()
})

downloadbtn.addEventListener('click',()=>{
    let imag = document.querySelector('.qr-body img')
    if(imag == null) return;
    let imgAttr = imag.getAttribute('src')
    if(imgAttr) downloadbtn.setAttribute('href',imgAttr);
    else downloadbtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`)
})