import { Dashboard } from './components/Dashboard/Index';
import { Header } from './components/Header/Index';
import { createServer } from 'miragejs'
import { useState } from 'react';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal/Index';

//Modal.setAppElement('root'); //adiciona o modal na div root e não no início do html e melhora acessibilidade

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
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </>
    );
}