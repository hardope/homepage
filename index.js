document.addEventListener('DOMContentLoaded', function(){
    let a = 1;
    let b = 1;
    document.querySelector('#about').addEventListener('click',function(){
    if (b === 1){
        b = 0;
        message.innerHTML = "<p>I recently became an high school graduate, I studied Electrical Installation and Maintenance Works at Government Technical College Ikorodu, I studied for two and half years and took four months off school for compulsory field work: SIWES-(student industrial working experience scheme).</p>";
        messages.innerHTML = "<p>Earlier this year, I completed two online programming courses, Introduction to Computer Science at Harvard university (CS50x) and (CS50p), currently I'm taking part in the CS50 web programming course.</p>";
        messages1.innerHTML = "<p>I took interest in computer programming when I was very young, seeing several high-tech devices, machines and vehicles in movies and documentaries. Since then, I have developed the interest computers and always wanted to know how machines and devices are made and designed.</p>";
        about.innerHTML = "Collapse";
    } else {
        b = 1;
        message.innerHTML = "";
        messages.innerHTML = "";
        messages1.innerHTML = "";
        about.innerHTML = "About me";
    }
         
    })
     document.querySelector('#projects').addEventListener('click',function(){
        if (a === 1){
            a = 0;
            document.querySelector('table').innerHTML = "<tr><td>Project Name</td><td>Language</td></tr>";
            let projects = [{
                name: 'Mini wikipedia',
                lang: 'Django'
            },{
                name: 'Live Crypto Price Web App',
                lang: 'Java Script, HTML, CSS'
            },{
                name: 'Web Based Contact App',
                lang: 'Flask'
            },{
                name: 'Caesar',
                lang: 'C Language'
            },{
                name: 'Command Based Contacts App',
                lang: 'Python'
            },{
                name: 'Web Based Messenger',
                lang: 'Flask'
            },{
                name: 'Command Based Live Crypto Price App',
                lang: 'Python'
            },{
                name: 'Readability',
                lang: 'Python and C language'
            }]
            let table = document.querySelector("table");
            for (let obj of projects) {
                let tr = table.insertRow();
                tr.insertCell().textContent = obj.name;
                tr.insertCell().textContent = obj.lang;
            }
        }else {
            a = 1;
            document.querySelector('table').innerHTML = '';
        }
     })
})