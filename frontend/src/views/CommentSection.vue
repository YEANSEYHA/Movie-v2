<template>
  <div class="container-fluid my-5">
		<div class="row">
			
			<div class="col-12">

				<!--- Post Form Begins -->
                <section class="card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make a comment
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div class="form-group">
                                    <label class="sr-only" for="message">post</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="Comment here...."></textarea>
                                </div>

                            </div>
                        </div>
                        <div class="text-right">
                        	<button type="submit" class="btn btn-primary">Comment</button>
                        </div>
                    </div>
                </section>
                <!--- Post Form Ends -->

				<!-- Post Begins -->
				<section class="card mt-4">
					<div class="border p-2">
						<!-- post header -->
						<div class="row m-0">
							<div class="">
								<a class="text-decoration-none" href="#">
									<img class="" src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="50" height="50" alt="...">
								</a>
							</div>
							<div class="flex-grow-1 pl-2">
								<a class="text-decoration-none" href="#">
									<h2 class="text-capitalize h5 mb-0">Shushant Singh</h2>
								</a> 
								<p class="small text-secondary m-0 mt-1">1 day ago</p>
							</div>
							

						</div>
						<!-- post body -->
						<div class="">
							<p class="my-2">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras 
								turpis sem, dictum id bibendum eget, malesuada ut massa. Ut scel
								erisque nulla sed luctus dapibus. Nulla sit amet mi vitae purus sol
								licitudin venenatis. Praesent et sem urna. Integer vitae lectus nis
								l. Fusce sapien ante, tristique efficitur lorem et, laoreet ornare lib
								ero. Nam fringilla 
							</p>
						</div>
						
					</div>
				</section>
				<!-- Post Ends -->
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
    name: 'CommentSection'
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

