

import React, { useCallback, useState } from 'react'

//The callback hook is using in unique states and it's complex to use 
//The states of use can't find essay and we use this hook little in react 
import AgeResult from '../../components/AgeResult'
import SalaryResult from '../../components/SalaryResult'
import AgeBtn from '../../components/AgeBtn'
import SalaryBtn from '../../components/SalaryBtn'




const Callback = () => {

    const [age, setAge] = useState(22);
    const [salary, setSalary] = useState(100);

    const addAge =  useCallback(()=>setAge(prev => prev + 1),[age]);
    const addSalary = useCallback(()=>setSalary(prev => prev + 100),[salary])


    return (
        <>
            <AgeResult age={age} />
            <SalaryResult salary={salary} />
            <AgeBtn action={addAge} />
            <SalaryBtn action={addSalary} />

        </>
    )
}

export default Callback

