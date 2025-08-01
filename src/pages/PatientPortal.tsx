import { useState } from 'react';
import { Calendar, Clock, User, FileText, Settings, LogOut, Eye, Download } from 'lucide-react';

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const upcomingAppointments = [
    {
      id: 1,
      service: 'Ultraformer MPT Treatment',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: '90 mins',
      specialist: 'Claudia Fabiani'
    },
    {
      id: 2,
      service: 'Lymphatic Drainage Massage',
      date: '2024-01-22',
      time: '2:30 PM',
      duration: '60 mins',
      specialist: 'Salia Insua Lopez'
    }
  ];

  const pastTreatments = [
    {
      id: 1,
      service: 'Custom Facial',
      date: '2024-01-08',
      specialist: 'Claudia Fabiani',
      notes: 'Excellent skin response. Recommended follow-up in 2 weeks.'
    },
    {
      id: 2,
      service: 'INDIBA Therapy',
      date: '2024-01-01',
      specialist: 'Salia Insua Lopez',
      notes: 'Good progress on targeted areas. Continue with recommended home care.'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">FUTURE CLINIC</h1>
                <p className="text-sm text-gray-600">MODERN BEAUTY</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Patient Portal
            </h2>
            <p className="text-gray-600">
              Access your treatment history and appointments
            </p>
          </div>

          <div className="bg-white p-8 shadow-lg">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account? Contact us to set up your patient portal access.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">FUTURE CLINIC</h1>
                <p className="text-xs text-gray-600">MODERN BEAUTY</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Client</span>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white shadow-lg p-6">
              <h3 className="text-lg font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full text-left px-4 py-2 rounded transition-colors duration-300 ${
                      activeTab === 'dashboard' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('appointments')}
                    className={`w-full text-left px-4 py-2 rounded transition-colors duration-300 ${
                      activeTab === 'appointments' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Appointments
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('treatments')}
                    className={`w-full text-left px-4 py-2 rounded transition-colors duration-300 ${
                      activeTab === 'treatments' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Treatment History
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-4 py-2 rounded transition-colors duration-300 ${
                      activeTab === 'profile' ? 'bg-black text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    Profile
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Dashboard</h2>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-8 h-8 text-blue-600" />
                      <div>
                        <p className="text-2xl font-bold">{upcomingAppointments.length}</p>
                        <p className="text-gray-600">Upcoming Appointments</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="text-2xl font-bold">{pastTreatments.length}</p>
                        <p className="text-gray-600">Past Treatments</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <User className="w-8 h-8 text-purple-600" />
                      <div>
                        <p className="text-2xl font-bold">2</p>
                        <p className="text-gray-600">Active Specialists</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Appointment */}
                <div className="bg-white p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Next Appointment</h3>
                  {upcomingAppointments.length > 0 ? (
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-lg">{upcomingAppointments[0].service}</h4>
                      <p className="text-gray-600">
                        {new Date(upcomingAppointments[0].date).toLocaleDateString()} at {upcomingAppointments[0].time}
                      </p>
                      <p className="text-gray-600">Duration: {upcomingAppointments[0].duration}</p>
                      <p className="text-gray-600">Specialist: {upcomingAppointments[0].specialist}</p>
                    </div>
                  ) : (
                    <p className="text-gray-600">No upcoming appointments</p>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Appointments</h2>
                
                <div className="bg-white shadow-lg">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold">Upcoming Appointments</h3>
                  </div>
                  <div className="divide-y">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-lg">{appointment.service}</h4>
                            <p className="text-gray-600">
                              {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                            </p>
                            <p className="text-gray-600">Duration: {appointment.duration}</p>
                            <p className="text-gray-600">Specialist: {appointment.specialist}</p>
                          </div>
                          <button className="btn-secondary text-sm px-4 py-2">
                            Reschedule
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'treatments' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Treatment History</h2>
                
                <div className="bg-white shadow-lg">
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold">Past Treatments</h3>
                  </div>
                  <div className="divide-y">
                    {pastTreatments.map((treatment) => (
                      <div key={treatment.id} className="p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-lg">{treatment.service}</h4>
                            <p className="text-gray-600">
                              {new Date(treatment.date).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600">Specialist: {treatment.specialist}</p>
                            <p className="text-gray-700 mt-2">{treatment.notes}</p>
                          </div>
                          <button className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-300">
                            <Eye className="w-4 h-4" />
                            <span>View Details</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Profile</h2>
                
                <div className="bg-white p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value="Jane"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value="Doe"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value="jane.doe@example.com"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value="+61 415 588 449"
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn-primary">
                      Update Profile
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;