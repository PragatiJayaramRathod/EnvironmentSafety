document.addEventListener('DOMContentLoaded', () => {
    const API_URL = '/api/incidents';
    const form = document.getElementById('incidentForm');
    const grid = document.getElementById('incidentsGrid');

    // Fetch and display incidents
    const loadIncidents = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Failed to fetch incidents');
            const data = await response.json();
            renderIncidents(data);
        } catch (error) {
            console.error('Error loading incidents:', error);
            grid.innerHTML = '<p style="color: red;">Error loading data.</p>';
        }
    };

    // Render incidents in the grid
    const renderIncidents = (incidents) => {
        grid.innerHTML = '';
        if (incidents.length === 0) {
            grid.innerHTML = '<p>No recent incidents reported.</p>';
            return;
        }

        // Sort incidents by newest first
        incidents.sort((a, b) => new Date(b.reportedAt) - new Date(a.reportedAt));

        incidents.forEach(incident => {
            const date = new Date(incident.reportedAt).toLocaleString();
            const badgeClass = incident.severity ? incident.severity.toLowerCase() : 'low';
            
            const card = document.createElement('div');
            card.className = 'incident-card';
            card.innerHTML = `
                <div class="card-header">
                    <h3 class="card-title">${incident.title}</h3>
                    <span class="badge ${badgeClass}">${incident.severity}</span>
                </div>
                <div class="card-body">
                    <div class="card-location">📍 ${incident.location}</div>
                    <p class="card-desc">${incident.description}</p>
                </div>
                <div class="card-footer">
                    <span>${date}</span>
                    <button class="delete-btn" data-id="${incident.id}">Resolve</button>
                </div>
            `;
            grid.appendChild(card);
        });

        // Add event listeners for delete buttons
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const id = e.target.getAttribute('data-id');
                await deleteIncident(id);
            });
        });
    };

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const newIncident = {
            title: document.getElementById('title').value,
            location: document.getElementById('location').value,
            severity: document.getElementById('severity').value,
            description: document.getElementById('description').value
        };

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newIncident)
            });

            if (response.ok) {
                form.reset();
                loadIncidents(); // Refresh the list
            } else {
                alert('Failed to submit report.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting report.');
        }
    });

    // Delete incident
    const deleteIncident = async (id) => {
        if (!confirm('Are you sure you want to resolve and remove this incident?')) return;
        
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                loadIncidents(); // Refresh the list
            } else {
                alert('Failed to delete incident.');
            }
        } catch (error) {
            console.error('Error deleting incident:', error);
        }
    };

    // Initial load
    loadIncidents();
});
