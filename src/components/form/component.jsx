"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import TitleComponent from '../title/component'
import InputComponent from '../input/component'
import GenderInput from '../genderInput/component'
import ButtonForm from '../formbutton/component'
import InputTitle from '../inputtitle/components'

export default function FormComponent() {
    const router = useRouter()
    const [error, setError] = useState("")

    const getDate = (bday) => {
        const currentDate = new Date()
        const usersDate = new Date(bday)
        const tresholdDate = new Date(currentDate) //  Создали копию текущей даты
        tresholdDate.setFullYear(currentDate.getFullYear() - 18)

        return usersDate <= tresholdDate
    }


    const GetUser = (formData) => {

        const name = formData.get("name")
        const email = formData.get("email")
        const bday = formData.get("bday")

        if (!getDate(bday)) {
            setError("Вам меньше 18 лет ")
            return
        }
        console.log(error)
        localStorage.setItem("user", JSON.stringify({ name, email, bday }));
        router.push("/")

    }

    return (
        <form
            style={{
                background: "white",
                maxWidth: "600px",
                padding: "50px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                margin: "70px auto",
                borderRadius: "20px"
            }}
            action={GetUser}>
            <TitleComponent title={"Registration"} />
            {error && <span style={{ color: "red", position: "absolute", top: "85px"}}>{error}</span>}
            <div style={{
                display: "flex",
                gap: "20px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "33px",
                }}>
                    <InputTitle title={"Name"} />
                    <InputTitle title={"Email"} />
                    <InputTitle title={"Date of Birth"} />
                    <InputTitle title={"Gender"} />
                    <InputTitle title={"Country"} />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                    justifyContent: "center"
                }}>
                    <InputComponent inpuTitle={"Tyler Jones"} type={"text"} name={"name"} />
                    <InputComponent inpuTitle={"alfa@mail.com"} type={"text"} name={"email"} />
                    <InputComponent inpuTitle={"20.10.10"} type={"date"} name={"bday"} />
                    <GenderInput male={"Male"} female={"Female"} />
                    <InputComponent inpuTitle={"Russia"} type={"text"} name={"country"} />
                </div>
            </div>
            <ButtonForm title={"Confirm"} type={"submit"} />
        </form>
    )
}
