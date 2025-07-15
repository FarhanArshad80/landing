// const Nav = () => {
//   return (
//     <div>
//       <nav>
//         <div className="logo">
//           <img src="/a.png" alt="Logo" />
//         </div>
//         <ul>
//           <li href = "#">Home</li>
//           <li href = "#">About</li>
//           <li href = "#">Services</li>
//           <li href = "#">Location</li>
//           <li href = "#">Contact Us</li>

//         </ul>
//         <button>Login</button>
//       </nav>
//     </div>
//   );
// };

// export default Nav;



const Nav = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/a.png" alt="Logo" />
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>

        <div className="nav-actions">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="login-btn">Login</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
