import React from 'react';
import { Link } from 'react-router-dom';
import TextEditor from './TextEditor';
import './style/TextEditor.scss';
import './style/Articles.scss';

const ArticleCreation = () => {
  return (
    <div>
      <button type="button" className="buttonList">
        <Link to="/articles">Listes</Link>
      </button>
      <button type="button" className="buttonArticle">
        <Link to="/articles/creation">Nouvel Article</Link>
      </button>
      <div className="TextEditor">
        <div className="Editor">
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

export default ArticleCreation;
