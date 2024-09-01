import Header from "./Header/header";
import Footer from './Footer/footer';
import ScrollBanner from './ScrollBanner/scrollBanner';
import ProductList from "./ListaProdutos/listaProdutos";


function Home() {
    return (
        <>
            <Header />
            <ScrollBanner />
            <ProductList />
            <Footer />
        </>
    )
}

export default Home;