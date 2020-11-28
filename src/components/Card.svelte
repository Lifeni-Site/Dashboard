<script type="ts">
</script>

<style>
  .card {
    width: 360px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #ffffff;
    overflow: hidden;
  }

  .card-meta {
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
  }

  .card-image {
    width: 100%;
    min-height: 200px;
    padding: 24px;
    background-color: #eeeeee;
    box-sizing: border-box;
  }

  .card-content {
    padding: 24px;
    box-sizing: border-box;
  }
</style>

<div class="card">
  <div class="card-meta">
    <span class="language">Language</span>
    <span class="last-update">2020/XX/XX</span>
  </div>
  <img src="" alt="Placeholder" class="card-image" />
  <div class="card-content">
    <h3 class="card-title">Card</h3>
    <div class="card-status-bar">
      <span class="star-count">Null</span>
      <span class="fork-count">Null</span>
      <span class="commit-count">Null</span>
    </div>
    <p class="card-description">Description</p>
    <div class="card-action-bar">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        class="demo-link">Demo</a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        class="github-link">GitHub</a>
    </div>
  </div>
</div>
