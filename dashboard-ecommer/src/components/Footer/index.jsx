import styles from "./index.module.css";

export const Footer = ({autor}) => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className={`sticky-footer ${styles.footer}`}>
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; {autor}</span>
          </div>
        </div>
      </footer>
      {/* <!-- End of Footer --> */}
    </>
  );
};
