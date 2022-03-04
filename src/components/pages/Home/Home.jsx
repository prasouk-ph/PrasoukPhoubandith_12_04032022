import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='home-header'>
                <p className='hello'>Bonjour</p>
                <p className='username'>Thomas</p>
            </div>
            <p className='cheering-message'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default Home;