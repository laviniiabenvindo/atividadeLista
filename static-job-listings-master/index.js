const boxConteiner = document.querySelector('.box-conteiner2');

window.addEventListener('DOMContentLoaded', ()=>{
    aparecerCaixas()
});

function aparecerCaixas(){
    fetch("data.json")
    .then((data)=>{
        return data.json()
    })
    .then((item)=>{
        let displayBox = item.map((info)=>{
            return `
            <div class="box-conteiner2">
            <div class="subBox2">
                <div class="subBox-img">
                <img class="box-img" src=${info.logo} alt="">
                <div class="subBox-info">
                    <span class="subBox-item">
                    <p>${info.company}</p>
                    <button class="new">${info.new}</button>
                    <button class="fea">${info.featured}</button>
                    </span>
                    <span class="title">
                    <h4>${info.position}</h4>
                    </span>
                    <span class="subBox-data">
                    <p>${info.postedAt}</p>
                    <p>${info.contract}</p>
                    <p>${info.location}</p>
                    </span>
                    </div>
                    </div>
                    <div class="status">
                    <span class="status-item">${info.role}</span>
                    <span class="status-item">${info.level}</span>
                    <span class="status-item">${info.tools[0] || info.tools[1]}</span>
                    <span class="status-item">${info.languages[0] || info.languages[1]}</span>
                    </div>
                </div>
                </div>`
        })
        displayBox = displayBox.join('')
        boxConteiner.innerHTML = displayBox
    })
    .catch((error) => console.log('Error' + error))
};