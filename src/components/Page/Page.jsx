import React from 'react'

function Page({background, title}) {
    return (
        <div className="about" style={{backgroundImage: "url('/images/home-background2-2.jpg')"}}> 
            <PageTitle page="ABOUT ME"/>  
        </div>
    )
}

export default Page
