import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, pariatur quibusdam! Repellendus tenetur aliquam, a cupiditate ipsam officia. Ab, suscipit voluptatem praesentium deserunt enim consequuntur fugit sit corrupti at quo eius labore. Pariatur, quibusdam.</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
