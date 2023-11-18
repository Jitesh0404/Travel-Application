const DestinationHandler = ({cName,heading,text,img1,img2}) => {
  return (
    <div className={cName}>
        <div className="des-text">
          <h2>{heading}</h2>
          <p>
            {text}
          </p>
        </div>
        <div className="image">
          <img src={img1} alt="image1" />
          <img src={img2} alt="image2" />
        </div>
      </div>
  )
}
export default DestinationHandler