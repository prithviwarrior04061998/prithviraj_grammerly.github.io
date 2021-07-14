// Check for the various File API support.

if (window.File && window.FileReader && window.FileList && window.Blob) {
    function showFile() {
        var preview = document.getElementById('show-text');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader()

        var textFile = /text.*/;

        if (file.type.match(textFile)) {
            reader.onload = function (event) {
                preview.innerHTML =event.target.result;
                fetch('https://api.textgears.com/spelling?key=swU78YHX86vw8uOk&text='+preview.innerHTML+"&language=en-GB").then(res=>{
                    console.log(res)
                })
            }
            // reader.onerror=(e)=>alert(e.target.error.name) 
        } else {
            preview.innerHTML = "<span class='error'>It doesn't seem to be a text file!</span>";
        }
        reader.readAsText(file);
        

        // const textgearsApi = textgears('swU78YHX86vw8uOk', { language: 'en-US' });
        // textgearsApi.spelling(preview.innerHTML)
        //     .then((data) => {
        //         for (const error of data.errors) {
        //             console.log('Error: %s. Suggestions: %s', error.bad, error.better.join(', '));
        //         }
        //     })
        //     .catch((err) => { });
    }
} else {
    alert("Your browser is too old to support HTML5 File API");
}
