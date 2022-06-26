import React from 'react';
// import style from './assets/Paginado.module.css';
// import leftArrow from './assets/left-arrow.svg'
// import rightArrow from './assets/right-arrow.svg'

export default function Paginado({ ITEMS_PER_PAGE, products, paginado, number }) {
    function goToNextPage() {
        paginado((pageNumber) => pageNumber + 1)
    }

    function goToPreviousPage() {
        paginado((pageNumber) => pageNumber - 1)
    }

    const btn = document.querySelector('.btnNext');
    function lastPage() {
        if (number >= Math.trunc((products / ITEMS_PER_PAGE))) btn.disabled = true;
    }

    function enableButton() {
        btn.disabled = false;
    }

    return (
        <nav>
            <ul>
                <button onClick={() => goToPreviousPage() & enableButton()}> Prev  </button>
                <button >{number}</button>
                <button className='btnNext' onClick={() => goToNextPage() & lastPage()}> Next </button>
            </ul>
        </nav>
    )
}