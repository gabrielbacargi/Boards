const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')
const cardec = document.querySelectorAll('.ec .card')
const cardcr = document.querySelectorAll('.cr .card')
const cardcf = document.querySelectorAll('.cf .card')

cards.forEach( function (cardsdrag){
cardsdrag.addEventListener('dragstart', dragstart)
cardsdrag.addEventListener('drag', drag)
cardsdrag.addEventListener('dragend', dragend)
})

function dragstart(){
console.log('Card: Start dragging')
this.classList.add('is-dragging')


}
function drag(){
    console.log('Card: dragged')
}
function dragend(){
    console.log('Card:End dragging')
    this.classList.remove('is-dragging')
    updateStatusClasses();
}

dropzones.forEach( function (drop){
    drop.addEventListener('dragenter', dragenter)
    drop.addEventListener('dragover', dragover)
    drop.addEventListener('dragleave', dragleave)
    drop.addEventListener('dropped', dropped)
    })

    function dragenter(){
    console.log('Card: Enter in the Dropzone');
    
    
    }
    function dragover(){
        console.log('Card: Over the Dropzone');
        this.classList.add('over')
        const cardBeinDragged=document.querySelector('.is-dragging')
        this.appendChild(cardBeinDragged)
    }
    function dragleave(){
        console.log('Card: Leave the Dropzone');
        this.classList.remove('over')
        updateStatusClasses();
    }
    function dropped(){
        console.log('Card:Dropped');
       
    }

    function updateStatusClasses() {
        cards.forEach(card => {
            const parentBoardId = card.closest('.board').id;
            const statusElement = card.querySelector('.status');
    
            if (statusElement) {
                statusElement.classList.remove('status1', 'status2', 'status3');
    
                if (parentBoardId === 'ec') {
                    statusElement.classList.add('status1');
                } else if (parentBoardId === 'cr') {
                    statusElement.classList.add('status2');
                } else if (parentBoardId === 'cf') {
                    statusElement.classList.add('status3');
                }
            }
        });
    }
    updateStatusClasses();