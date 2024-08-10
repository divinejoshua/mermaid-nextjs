"use client"
import mermaid from "mermaid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [mermaidChart, setmermaidChart] = useState("")

  const mermaidRef = useRef(null);

  const setValueOne = () =>{
    setmermaidChart(`
      sequenceDiagram
        participant Customer
        participant BankingApp
        participant AccountService
        participant TransactionService
        participant NotificationService
  
        Customer->>BankingApp: Initiates Transaction (e.g., Transfer Money)
        BankingApp->>AccountService: Validate Account and Balance
        AccountService-->>BankingApp: Account Validated
  
        BankingApp->>TransactionService: Create Transaction
        TransactionService-->>BankingApp: Transaction Created
        
        BankingApp->>AccountService: Deduct Amount from Account
        AccountService-->>BankingApp: Amount Deducted
        
        BankingApp->>NotificationService: Send Transaction Notification
        NotificationService-->>Customer: Notification Sent
        
        BankingApp-->>Customer: Transaction Success Messages
        `
    )


    // // Get the element by ID
    // var mermaidElement : any = document.getElementsByClassName('mermaid');

    // console.log(document.querySelector('mermaid'))

    // // Set the inner HTML of the element
    // mermaidElement.innerHTML = mermaidChart;

    // // Remove the 'data-processed' attribute
    // mermaidElement.removeAttribute('data-processed');

    // // Initialize Mermaid
    // mermaid.init(undefined, mermaidElement);
  }



  const setValueTwo = () =>{
    setmermaidChart(`
     flowchart TD
        A[Start] --> B[Do you have an idea?]
        B -->|Yes| C[Validate the idea]
        B -->|No| D[Brainstorm new ideas]
        C --> E[Create a prototype]
        D --> B
        E --> F[Gather feedback]
        F --> G[Is the feedback positive?]
        G -->|Yes| H[Develop the product]
        G -->|No| I[Improve the prototype]
        I --> E
        H --> J[Launch the product]
        J --> K[Market the product]
        K --> L[Product succeeds?]
        L -->|Yes| M[Scale the product]
        L -->|No| N[Pivot or discontinue]
        N --> D
        M --> O[Celebrate success!]
      `
    )}

  useEffect(() => {
    // setValue()

    setTimeout(
      function() {
        setValueOne()
      }, 2000);

      setTimeout(
        function() {
          setValueTwo()
        }, 5000);
    
  }, [])



  useEffect(() => {
    console.log("should be here")
    // Ensure Mermaid is initialized when the component mounts or graphDefinition updates
    if (mermaidRef.current) {
        mermaidRef.current.innerHTML = mermaidChart;
        mermaidRef.current.removeAttribute('data-processed');
        mermaid.init(undefined, mermaidRef.current);
    }
}, [mermaidChart]); // Run the effect when graphDefinition changes

  

  const PreviewMermaidCode = ({ value } : { value : string}) => {

    return (
      value && <div ref={mermaidRef}></div>
      // value &&
      // <div className="mermaid">
      //   {value}
      // </div>
    );
  };


  return (
    <main>
      <PreviewMermaidCode value={mermaidChart} />
    </main>
  );
}
