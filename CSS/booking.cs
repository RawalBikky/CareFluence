.modal {
  display: none; position: fixed; z-index: 10;
  left: 0; top: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.6); justify-content: center; align-items: center;
}
.modal-content {
  background: #fff; padding: 30px; border-radius: var(--radius);
  width: 90%; max-width: 400px;
}
.modal-content input,
.modal-content textarea {
  width: 100%; margin: 10px 0; padding: 10px;
  border: 1px solid #ccc; border-radius: var(--radius);
}
.close {
  float: right; font-size: 24px; cursor: pointer; color: #999;
}

.thankyou {
  display: none; position: fixed; top:0; left:0;
  width:100%; height:100%; background: rgba(0,0,0,0.6);
  justify-content:center; align-items:center;
}
.thankyou-box {
  background:#fff; padding:30px; border-radius: var(--radius);
  text-align:center;
}
