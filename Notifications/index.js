const Notification = props => {
    //  Write your code here.
    const {imgUrl, imgCls, msgCart, msgText} = props.source
    return (
      <div className={msgCart}>
        <img src={imgUrl} className={imgCls} />
        <p>{msgText}</p>
      </div>
    )
  }
  const sourcePrimary = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png',
    imgCls: 'imgEl',
    msgCart: 'msg-card-primary',
    msgText: 'Information message',
  }
  const sourceSuccess = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/success-icon-img.png',
    imgCls: 'imgEl',
    msgCart: 'msg-card-success',
    msgText: 'Success Message',
  }
  const sourceWarning = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/warning-icon-img.png',
    imgCls: 'imgEl',
    msgCart: 'msg-card-warning',
    msgText: 'Warning Message',
  }
  const sourceDanger = {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/danger-icon-img.png',
    imgCls: 'imgEl',
    msgCart: 'msg-card-danger',
    msgText: 'Error message',
  }
  const element = (
    //  Write your code here.
    <div className='bg-container'>
      <h1 class='header'>Notifications</h1>
      <Notification source={sourcePrimary} />
      <Notification source={sourceSuccess} />
      <Notification source={sourceWarning} />
      <Notification source={sourceDanger} />
    </div>
  )
  
  ReactDOM.render(element, document.getElementById('root'))
  