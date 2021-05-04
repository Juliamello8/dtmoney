import { Dashboard } from './components/Dashboard/Index';
import { Header } from './components/Header/Index';
import { useState } from 'react';
import Modal from 'react-modal';

import { GlobalStyle } from './styles/global'
import { NewTransactionModal } from './components/NewTransactionModal/Index';

//adiciona o modal na div root e não no início do html e melhora acessibilidade
Modal.setAppElement('#root');

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