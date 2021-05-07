function changeContent(type){
    if (type == 'Projects')
    {
        var current = document.getElementById("current")
        current.innerHTML = '<h2>MNIST Classifier</h2> <div class="image-container"> <img src="Assets/mnist_digital.png" alt="MNIST Image" width="100%" height="100%" /> </div> <p class="des_project">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniticonsequuntur laboriosam saepe accusantium provident perspiciatis libero earum </p>'
    }
    else if(type == 'About Me')
    {
        var current = document.getElementById("current")
        current.innerHTML = '<h2>Who the f#@! is Juan Hurtado</h2> <div class="info-container"> <img src="Assets/Hurtado Best Look.png" alt="MNIST Image" width="50%" height="50%"/> <ul> <li>Programmer</li> <li>Editor</li> <li>Designer</li> <li>Gamer</li> <li>Coffee Addict</li> </ul> </div> <p class="des_person"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur laboriosam saepe accusantium provident perspiciatis lib </p>'
    }
    else if(type == 'Contact')
    {
        var current = document.getElementById("current")
        current.innerHTML = '<h2>How To Find Him?</h2> <br /> <div class="contact"> <div class="image-block"> <a href="https://www.instagram.com/hurta08/?hl=es-la" target="_blank"> <img src="Assets/Rectángulo 1@2x.png" alt="MNIST Image" width="90%" height="90%" /> </a> </div> <div class="image-block"> <a href="https://www.instagram.com/hurta08/?hl=es-la" target="_blank"> <img src="Assets/Rectángulo 4@2x.png" alt="MNIST Image" width="90%" height="90%" /> </a> </div> <div class="image-block"> <a href="https://github.com/ElHurta" target="_blank"> <img src="Assets/Rectángulo 6@2x.png" alt="MNIST Image" width="90%" height="90%" /> </a> </div> <div class="image-block"> <a href="https://www.linkedin.com/in/juan-david-0244b5188" target="_blank"> <img src="Assets/Rectángulo 8@2x.png" alt="MNIST Image" width="90%" height="90%" /> </a> </div> </div>'
    }
}