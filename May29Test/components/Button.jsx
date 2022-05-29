

const Button = ({classtoApply,children,onClick}) => {
  return (
    <button onClick={onClick} className={classtoApply}>{children}</button>
  )
}

