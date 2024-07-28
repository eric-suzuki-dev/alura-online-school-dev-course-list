'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Modal } from "../Modal"
import { Chat } from "../icons/Chat"

export const ModalComment = () => {
    const modalRef = useRef(null)
    return (
        <>
            <Modal ref={modalRef}>
                <form>
                    <textarea name="text"></textarea>
                    
                </form>
            </Modal>
            <IconButton
                onClick={() => modalRef.current.openModal()}
            >
                <Chat />
            </IconButton>
        </>
    )
}