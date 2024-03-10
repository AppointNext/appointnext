const Dashboard = () => {
  const [location, setLocation] = useState(null);
  const handleSearch = async () => {
    try {
      const { coords } = await getCurrentLocation();
      const { latitude, longitude } = coords;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const getCurrentLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  handleSearch();
  console.log(location);
  return <div>Hello</div>;
};

export default Dashboard;
