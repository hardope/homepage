document.addEventListener('DOMContentLoaded', function(){
     document.querySelector('#about').addEventListener('click',function(){
         message.innerHTML = "<p>I recently became an high school graduate, I studied Electrical Installation and Maintenance Works at Government Technical College Ikorodu, I studied for two and half years and took four months off school for compulsory field work: SIWES-(student industrial working experience scheme).</p>";
         messages.innerHTML = "<p>Earlier this year, I completed two online programming courses, Introduction to Computer Science at Harvard university (CS50x) and (CS50p), currently I'm taking part in the CS50 web programming course.</p>";
         messages1.innerHTML = "<p>I took interest in computer programming when I was very young, seeing several high-tech devices, machines and vehicles in movies and documentaries. Since then, I have developed the interest computers and always wanted to know how machines and devices are made and designed.</p>"
         about.innerHTML = "Collapse"
         document.querySelector('#about').addEventListener('click',function(){
             message.innerHTML = ""
             messages.innerHTML = ""
             messages1.innerHTML = ""
             about.innerHTML = "About me"
         })
     })
     document.querySelector('#projects').addEventListener('click',function(){
         message1.innerHTML = "<li><a href='clanguage.html'>C Language projects</a></li><li><a href='python.html'>Python Language Projects</a></li><li><a href='html.html'>HTML Projects</a></li>";
     })
})