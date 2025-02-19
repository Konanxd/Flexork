<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Vacancy;
use App\Models\Company;
use App\Models\Tag;

class VacancyTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function test_can_create_vacancy(): void
    {
        // $company = Company::factory()->create();

        $vacancyData = [
            'id_company' => '1',
            'title_vacancy' => 'Software Engineer',
            'description_vacancy' => 'Job description here',
            'is_active' => true,
            'deadline_vacancy' => now()->addDays(10),
            'jobdesk_vacancy' => 'Jobdesk details here',
            'benefit_vacancy' => 'Benefits details here',
            'salaray_vacancy' => 60000
        ];

        $response = $this->post('/lowongan', $vacancyData);

        $response->assertStatus(201);
        $this->assertDatabaseHas('vacancies', $vacancyData);
    }

    public function test_can_update_vacancy(): void
    {
        // $vacancy = Vacancy::factory()->create();

        $updatedData = [
            'title_vacancy' => 'Updated Title',
            'description_vacancy' => 'Updated description',
            'is_active' => false,
            'deadline_vacancy' => now()->addDays(20),
            'jobdesk_vacancy' => 'Updated jobdesk',
            'benefit_vacancy' => 'Updated benefits',
            'salaray_vacancy' => 70000
        ];

        $response = $this->put("/lowongan/1", $updatedData);

        $response->assertStatus(200);
        $this->assertDatabaseHas('vacancies', $updatedData);
    }

    public function test_can_delete_vacancy(): void
    {
        // $vacancy = Vacancy::factory()->create();

        $response = $this->delete("/lowongan/1");

        $response->assertStatus(200);
        $this->assertDatabaseMissing('vacancies', ['id' => '1']);
    }

    // public function test_can_attach_tags_to_vacancy(): void
    // {
    //     $vacancy = Vacancy::factory()->create();
    //     $tags = Tag::factory()->count(3)->create();

    //     $response = $this->post("/lowongan/1/tags", [
    //         'tags' => $tags->pluck('id')->toArray()
    //     ]);

    //     $response->assertStatus(200);
    //     foreach ($tags as $tag) {
    //         $this->assertDatabaseHas('vacancy_tags', [
    //             'id_vacancy' => $vacancy->id,
    //             'id_tag' => $tag->id
    //         ]);
    //     }
    // }
}
