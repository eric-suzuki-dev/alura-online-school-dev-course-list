'use client'

import { forwardRef, useImperativeHandle, useRef } from "react"

const Modal = forwardRef(({ childrem }, ref) => {

    const dialogRef = useRef(null)

    const closeModal = () => {
        dialogRef.current.close()
    }

    const openModal = () => {
        dialogRef.current.showModal()
    }

    useImperativeHandle(ref, () => {
        return {
            closeModal,
            openModal
        }
    })

    return (<dialog ref={dialogRef}>
        <header>
            <button>
                X
            </button>
        </header>
    </dialog>)
})