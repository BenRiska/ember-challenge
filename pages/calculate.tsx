import {useState} from "react"
import styles from "../styles/Calculate.module.css"

const Calculate: React.FC = () => {

    const [savings, setSavings] = useState<boolean|number>(false)
    const [showResult, setShowResult] = useState<boolean>(false)
    const [formData, setFormData] = useState({currentCost: 0, employeeCount: 0})

    const setFormValue = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const fetchSavings = async (e) => {
       e.preventDefault()
       const result = await fetch("https://ember-challenge.vercel.app/api/calculate", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(formData)
       }).then(res => res.json())
       setSavings(result.savings)
       setShowResult(true)
       setFormData({currentCost: 0, employeeCount: 0})
    }

    return (
        <div className={styles.calculate}>
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
