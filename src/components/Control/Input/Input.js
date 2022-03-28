import styles from "./Input.module.css";

function Input(params) {
  return (
    <div className={styles.input}>
      <label htmlFor={params.name}>{params.name}</label>
      <input
        type="number"
        name={params.name}
        onChange={(e) => {
          params.onChange(e);
        }}
        defaultValue={params.default} // 리액트 input 요소 기본값 지정 시 defaultValue 사용할 것. value 는 읽기 전용으로 오히려 값을 변경하지 못하게 함.
      />
    </div>
  );
}

export default Input;
