import React, { useContext } from "react";
import "./t&c.scss";
import TnCContext from "../../context/t&cContext";

const TermsAndConditions = () => {
    const {setShowTnC} = useContext(TnCContext);
    

    return (
        <div className="TermsWrapper">
            <h2>Terms And Conditions</h2>
            <div className="termsContainer">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non risus. Suspendisse lectus tortor, dignissim sit amet,
                    adipiscing nec, ultricies sed, dolor. Cras elementum
                    ultrices diam. Maecenas ligula massa, varius a, semper congue,
                    euismod non, mi. Proin porttitor, orci nec nonummy molestie,
                    enim est eleifend mi, non fermentum diam nisl sit amet erat.
                    Duis semper. Duis arcu massa, scelerisque vitae, consequat in,
                    pretium a, enim. Pellentesque congue. Ut in risus volutpat
                    libero pharetra tempor. Cras vestibulum bibendum augue. Praesent
                    egestas leo in pede. Praesent blandit odio eu enim. Pellentesque
                    sed dui ut augue blandit sodales. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam
                    nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas
                    suscipit, turpis nec sollicitudin euismod, quam odio varius
                    lacus, id placerat metus nisl et lectus. Nulla vulputate
                    felis sed lacus. Sed sed pede. Integer id ligula. Duis
                    et dolor. Etiam et sapien. Integer ac est. Nulla facilisi.
                    Nullam vel sem. Morbi libero. Morbi libero. Ut non enim eleifend
                    felis pretium feugiat. Cras congue lorem id dolor. Maecenas
                    ut est. Maecenas in purus. Vivamus auctor leo a sem.
                    scelerisque vitae, consequat in,
                    pretium a, enim. Pellentesque congue. Ut in risus volutpat
                    libero pharetra tempor. Cras vestibulum bibendum augue. Praesent
                    egestas leo in pede. Praesent blandit odio eu enim. Pellentesque
                    sed dui ut augue blandit sodales. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam
                    nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas
                    suscipit, turpis nec sollicitudin euismod, quam odio varius
                    lacus, id placerat metus nisl et lectus. Nulla vulputate
                    felis sed lacus. Sed sed pede. Integer id ligula. Duis
                    et dolor. Etiam et sapien. Integer ac est. Nulla facilisi.
                    Nullam vel sem. Morbi libero. Morbi libero. Ut non enim eleifend
                    felis pretium feugiat. Cras congue lorem id dolor. Maecenas
                    ut est. Maecenas in purus. Vivamus auctor leo a sem.
                </p>
            </div>
            <button onClick={()=>setShowTnC(false)}>Close</button>
        </div>
    );
};

export default TermsAndConditions;
