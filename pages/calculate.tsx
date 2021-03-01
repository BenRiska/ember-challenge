import {useState} from "react"
import styles from "../styles/Calculate.module.css"
import Head from 'next/head'

const Calculate: React.FC = () => {
    const [loader, setLoader] = useState<boolean>(false)
    // holds api return value
    const [savings, setSavings] = useState<boolean|number>(false)
    // conditional value to display result when data is fetched
    const [showResult, setShowResult] = useState<boolean>(false)
    // holds form data
    const [formData, setFormData] = useState({currentCost: 0, employeeCount: 0})
    // sets form data
    const setFormValue = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
    // fetches data from api
    const fetchSavings = async (e) => {
        // check fields have been filled correctly
        if(formData.currentCost > 0 && formData.employeeCount > 0){
       // prevent form refresh
       e.preventDefault()
       // set loader
       setLoader(true)
       // fetch data
       const result = await fetch("https://ember-challenge.vercel.app/api/calculate", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(formData)
       }).then(res => res.json())
       console.log(result)
       // set data, show result and clear form fields
       setSavings(result.savings)
       setShowResult(true)
       setFormData({currentCost: 0, employeeCount: 0})
       setLoader(false)
        } else{
            alert("Please fill all fields correctly.")
        }
    }

    return (
        <div className={styles.calculate}>
            <Head>
                <title>Ember.co - Calculator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.calculate__form}>
                <form>
                    <h1>Savings calculator</h1>
                    <label>
                        How much do you currently pay your accountant per month?
                    </label>
                    <input 
                    onChange={e => setFormValue(e)} 
                    name="currentCost" 
                    type="number" 
                    value={formData.currentCost}
                    />
                    <label>
                        How many employees do you have?
                    </label>
                    <input 
                    onChange={e => setFormValue(e)} 
                    name="employeeCount" 
                    type="number" 
                    value={formData.employeeCount}
                    />
                    <button onClick={fetchSavings}>Find out how much i'll save</button>
                </form>
            </div>
            <div className={styles.calculate__output}>
                {loader && <div className={styles.spinner}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>}
                {showResult && (
                    <>
                    <p className={styles.calculate__text}>You'll save</p>
                    <p className={styles.calculate__result}>£{savings}</p>
                    <p className={styles.calculate__text}>per year</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default Calculate
