export default printPdf = (url) => {
    return new Promise((resolve, reject) => {
        if (window.iframePrint) {
            window.iframePrint.parentNode.removeChild(window.iframePrint);
            window.iframePrint = null;
        }
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function (e) {
            if (this.status == 200) {
                let blob = new Blob([this.response], { type: 'application/pdf' });
                let url = URL.createObjectURL(blob);
                if (!window.iframePrint) {
                    let iframe = document.createElement("iframe");
                    iframe.className = "iframePrint",
                        iframe.src = url,
                        iframe.style.display = 'none';
                    window.iframePrint = iframe;
                    document.body.appendChild(window.iframePrint);
                    window.iframePrint.onload = () => {
                        resolve(true);
                        window.iframePrint.contentWindow.print();
                    };
                }
            } else {
                resolve(false);
            }
        };
        xhr.send();
    })
}