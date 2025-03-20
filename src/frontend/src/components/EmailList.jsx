import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('/api/emails');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };
    fetchEmails();
  }, []);

  const filteredEmails = emails.filter(email =>
    email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    email.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="email-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search emails..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {filteredEmails.map((email) => (
        <div key={email.id} className="email-item">
          <div className="email-header">
            <h3>{email.subject}</h3>
            <span className={`category-tag ${email.category}`}>
              {email.category}
            </span>
          </div>
          <p className="email-from">From: {email.from}</p>
          <p className="email-preview">{email.text.slice(0, 200)}...</p>
          <div className="email-footer">
            <span className="email-date">
              {new Date(email.date).toLocaleString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmailList;