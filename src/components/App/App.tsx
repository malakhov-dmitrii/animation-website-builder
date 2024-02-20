import Header from '../Header/Header'
import Layout from '../Layout/Layout'

function App() {
    return (
        <div className='page'>
            <div className='page__container'>
                <Header />
                <main className='main'>
                    <Layout />
                </main>
            </div>
        </div>
    )
}

export default App
