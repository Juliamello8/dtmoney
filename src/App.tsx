import { Dashboard } from './components/Dashboard/Index';
import { Header } from './components/Header/Index';
import { GlobalStyle } from './styles/global'
import { createServer } from 'miragejs'

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Transaction 1',
                    amout: 400,
                    type: 'deposit',
                    category: 'Food',
                    createAt: new Date()
                }
            ]
        });
    }
})

export function App() {
    return (
        <>
            <Header />
            <Dashboard />
            <GlobalStyle />
        </>
    );
}