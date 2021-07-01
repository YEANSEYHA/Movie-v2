<template>
  <div class="container-fluid my-5">
		<div class="row">
			
			<div class="col-12">

				<!--- Post Form Begins -->
                <section class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Report Technical Problems here
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div class="form-group">
                                    <label class="sr-only" for="message">post</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="Report here...."></textarea>
                                </div>

                            </div>
                        </div>
                        <div class="text-right">
                        	<button type="submit" class="btn btn-primary">Report</button>
                        </div>
                    </div>
                </section>
                <!--- Post Form Ends -->

				
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
    name: 'ReportSection'
}
</script>

<style scoped>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css';
@import 'https://use.fontawesome.com/releases/v5.6.1/css/all.css';

.h7
		{
			font-size: 0.9rem;
		}
</style>

