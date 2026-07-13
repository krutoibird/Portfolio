
function addProject(event) {
    event.preventDefault();
    const projectName = noteInput.value.trim();
    const projectDescription = noteInput.value.trim();
    if (projectName === '') return;
    
    const addedNote = {
        text: projectName,
        description: projectDescription,
        id: Date.now(),
        type: "project"
    };
    
    notes.push(addedNote);
    noteInput.value = '';
    saveNotes();
    renderNotes();
    updateNoteCount();
}

noteList.addEventListener('click', (event) => {
    const index = parseInt(event.target.getAttribute('data-index'));
    
    if (event.target.classList.contains('delete-btn')) {
        deleteNoteByIndex(index);
    }
    
    if (event.target.classList.contains('note-btn')) {
        const note = notes[index];
        localStorage.setItem('currentIndex', subjectIndex);
        
        if (note.type === 'mindmap') {
            localStorage.setItem('currentMindmap', note.id);
            localStorage.setItem('currentMindmapName', note.text);
            window.location.href = 'mindmap.html';
        } else {
            localStorage.setItem('currentNotes', note.id);
            localStorage.setItem('currentName', note.text);
            window.location.href = 'innerNotes.html';
        }
    }
});