import React from "react";

function handleSubmit(e) {
    setTimeout(() => {
        e.target.reset();
    }, 3000);
}

const Contact = () => {
    return(
        <div>
            <div>
                <div>
                    <p>
                        Contact
                    </p>
                    <p>
                        To get into contact with me. Submit the form below!
                    </p>
                </div>

                <div>
                    <form>
                        <input 

                        />

                        <input 
                            
                        />

                        <input 
                            
                        />
                        <button>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;