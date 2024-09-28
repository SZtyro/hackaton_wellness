package pl.drunkcom.wellness.activity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import pl.drunkcom.core.model.BaseEntity;
import pl.drunkcom.wellness.campaign.Campaign;
import pl.drunkcom.wellness.task.Task;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Data
public class Activity extends BaseEntity {

    @Column
    private String name;

    @OneToMany
    private List<Task> tasks;

    @ManyToMany
    private List<Campaign> campaigns;

    //Type enum

    //User
}
